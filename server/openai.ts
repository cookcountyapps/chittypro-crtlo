import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key" 
});

export async function analyzeRTLOQuestion(question: string): Promise<{
  answer: string;
  rtloSection: string | null;
  confidence: 'high' | 'medium' | 'low';
}> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        {
          role: "system",
          content: `You are an expert on Chicago's Residential Landlord and Tenant Ordinance (RTLO), Chapter 5-12 of the Chicago Municipal Code. 
          
          Provide accurate, specific answers about Chicago RTLO requirements, citing exact sections when possible. 
          
          Key RTLO sections include:
          - 5-12-080: Security deposits (max 1.5x monthly rent for unfurnished, 2x for furnished)
          - 5-12-090: Return of security deposits (within 45 days)
          - 5-12-110: Landlord's right of access
          - 5-12-120: Tenant's general responsibilities
          - 5-12-130: Landlord's general duties
          - 5-12-140: Notice of conditions affecting habitability
          - 5-12-150: Remedies
          
          Always indicate your confidence level and cite specific RTLO sections when applicable.
          
          Respond in JSON format: {
            "answer": "detailed answer with specific RTLO requirements",
            "rtloSection": "5-12-XXX or null if not section-specific",
            "confidence": "high|medium|low"
          }`
        },
        {
          role: "user",
          content: question,
        },
      ],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    return {
      answer: result.answer || "Unable to provide specific guidance. Please consult the full Chicago RTLO text or legal counsel.",
      rtloSection: result.rtloSection || null,
      confidence: ['high', 'medium', 'low'].includes(result.confidence) ? result.confidence : 'low',
    };
  } catch (error) {
    console.error("Error analyzing RTLO question:", error);
    throw new Error("Failed to analyze RTLO question: " + (error as Error).message);
  }
}

export async function analyzeLeaseCompliance(leaseText: string): Promise<{
  complianceScore: number;
  issues: Array<{
    section: string;
    issue: string;
    severity: 'high' | 'medium' | 'low';
    recommendation: string;
  }>;
  recommendations: string[];
}> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        {
          role: "system",
          content: `You are an expert lease reviewer specializing in Chicago RTLO compliance. 
          
          Analyze the provided lease text for compliance with Chicago's Residential Landlord and Tenant Ordinance (Chapter 5-12).
          
          Key areas to check:
          - Security deposit limits and terms (5-12-080, 5-12-090)
          - Required RTLO summary attachment
          - Prohibited lease clauses
          - Landlord and tenant responsibilities
          - Access rights and notice requirements
          - Habitability standards
          
          Provide a compliance score (0-100) and identify specific issues with RTLO section references.
          
          Respond in JSON format: {
            "complianceScore": number,
            "issues": [{
              "section": "5-12-XXX",
              "issue": "description of issue",
              "severity": "high|medium|low",
              "recommendation": "specific recommendation"
            }],
            "recommendations": ["list of general recommendations"]
          }`
        },
        {
          role: "user",
          content: `Please analyze this lease for Chicago RTLO compliance:\n\n${leaseText}`,
        },
      ],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    return {
      complianceScore: Math.max(0, Math.min(100, result.complianceScore || 0)),
      issues: Array.isArray(result.issues) ? result.issues : [],
      recommendations: Array.isArray(result.recommendations) ? result.recommendations : [],
    };
  } catch (error) {
    console.error("Error analyzing lease compliance:", error);
    throw new Error("Failed to analyze lease compliance: " + (error as Error).message);
  }
}

export async function generateRTLODocument(type: string, data: any): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        {
          role: "system",
          content: `You are a legal document generator specializing in Chicago RTLO-compliant documents.
          
          Generate accurate, legally compliant documents based on Chicago's Residential Landlord and Tenant Ordinance.
          
          Available document types:
          - "security-deposit-notice": Notice regarding security deposit return
          - "access-notice": 48-hour access notice (5-12-110)
          - "lease-addendum": RTLO compliance addendum
          - "habitability-notice": Notice of habitability issues
          
          Ensure all documents include proper legal language and RTLO section references where applicable.`
        },
        {
          role: "user",
          content: `Generate a ${type} document with the following information: ${JSON.stringify(data)}`,
        },
      ],
    });

    return response.choices[0].message.content || "Unable to generate document.";
  } catch (error) {
    console.error("Error generating RTLO document:", error);
    throw new Error("Failed to generate document: " + (error as Error).message);
  }
}
