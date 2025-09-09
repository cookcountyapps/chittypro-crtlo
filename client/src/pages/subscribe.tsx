import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

const SubscribeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin,
      },
    });

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Payment Successful",
        description: "You are now subscribed to ChittyPro Premium!",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Complete Your Subscription</CardTitle>
        <CardDescription className="text-center">
          Enter your payment information to activate ChittyPro Premium
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <PaymentElement />
          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={!stripe || !elements}
            data-testid="button-subscribe"
          >
            <i className="fas fa-crown mr-2"></i>
            Subscribe to Premium
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default function Subscribe() {
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    // Create subscription as soon as the page loads
    apiRequest("POST", "/api/get-or-create-subscription")
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Failed to initialize subscription. Please try again.",
          variant: "destructive",
        });
      });
  }, [toast]);

  const isPremium = user?.subscriptionStatus === "active";

  if (isPremium) {
    return (
      <div className="p-6 space-y-8" data-testid="page-subscribe">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Subscription</h1>
          <p className="text-muted-foreground">
            Manage your ChittyPro Premium subscription.
          </p>
        </div>

        <Card className="border-primary/20">
          <CardContent className="p-12">
            <div className="text-center space-y-6">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-crown text-primary text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">You're Premium!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for subscribing to ChittyPro Premium. You have access to all advanced features including AI lease analysis.
                </p>
              </div>
              <Badge className="text-lg px-4 py-2">Premium Active</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="p-6 space-y-8" data-testid="page-subscribe">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Subscribe to Premium</h1>
          <p className="text-muted-foreground">
            Unlock advanced AI features and premium RTLO compliance tools.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-12">
              <div className="text-center space-y-4">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
                <div className="text-muted-foreground">Setting up your subscription...</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8" data-testid="page-subscribe">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Subscribe to Premium</h1>
        <p className="text-muted-foreground">
          Unlock advanced AI features and premium RTLO compliance tools.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Subscription Form */}
        <div>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <SubscribeForm />
          </Elements>
        </div>

        {/* Premium Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <i className="fas fa-crown text-accent"></i>
              Premium Features
            </CardTitle>
            <CardDescription>
              Everything included with your ChittyPro Premium subscription
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center mt-1">
                  <i className="fas fa-robot text-primary text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-foreground">AI Lease Analysis</div>
                  <div className="text-sm text-muted-foreground">Advanced AI-powered lease compliance review</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-secondary/10 w-8 h-8 rounded-lg flex items-center justify-center mt-1">
                  <i className="fas fa-file-contract text-secondary text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Advanced Document Generation</div>
                  <div className="text-sm text-muted-foreground">Premium templates and customization options</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-accent/10 w-8 h-8 rounded-lg flex items-center justify-center mt-1">
                  <i className="fas fa-chart-line text-accent text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Compliance Monitoring</div>
                  <div className="text-sm text-muted-foreground">Ongoing compliance tracking and alerts</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center mt-1">
                  <i className="fas fa-headset text-primary text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Priority Support</div>
                  <div className="text-sm text-muted-foreground">Faster response times and dedicated assistance</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-secondary/10 w-8 h-8 rounded-lg flex items-center justify-center mt-1">
                  <i className="fas fa-database text-secondary text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Unlimited Analyses</div>
                  <div className="text-sm text-muted-foreground">No limits on AI analysis requests</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-accent/10 w-8 h-8 rounded-lg flex items-center justify-center mt-1">
                  <i className="fas fa-shield-alt text-accent text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Enhanced Security</div>
                  <div className="text-sm text-muted-foreground">Advanced data protection and privacy</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$29/month</div>
                <div className="text-sm text-muted-foreground">Cancel anytime • No setup fees</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
