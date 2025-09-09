import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";

export default function LegalAid() {
  const { data: legalAidResources, isLoading } = useQuery({
    queryKey: ["/api/legal-aid"],
  });

  return (
    <div className="p-6 space-y-8" data-testid="page-legal-aid">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Legal Aid Directory</h1>
        <p className="text-muted-foreground">
          Find free legal assistance for housing issues, evictions, and debt problems in Cook County.
        </p>
      </div>

      {/* Emergency Contact */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <i className="fas fa-phone text-primary text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Cook County Legal Aid Hotline</h3>
              <div className="text-3xl font-bold text-primary mb-2">855-956-5763</div>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Call for free assistance with evictions, debt issues, and housing problems. Available to all Cook County residents.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Free Consultation</Badge>
              <Badge variant="outline">All Cook County Residents</Badge>
              <Badge variant="outline">No Case Required</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legal Aid Resources */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Available Legal Aid Organizations</h2>
          <p className="text-muted-foreground">
            These organizations provide free or low-cost legal assistance for housing and eviction matters.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <div className="text-muted-foreground">Loading legal aid resources...</div>
          </div>
        ) : legalAidResources && legalAidResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalAidResources.map((resource: any) => (
              <Card key={resource.id} className="hover-elevate" data-testid={`legal-aid-${resource.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{resource.name}</CardTitle>
                      <CardDescription className="mt-2">{resource.description}</CardDescription>
                    </div>
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center ml-4">
                      <i className="fas fa-gavel text-primary"></i>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Contact Information */}
                  {resource.phone && (
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-phone text-muted-foreground text-sm"></i>
                      <a 
                        href={`tel:${resource.phone}`} 
                        className="text-primary hover:text-primary/80 font-medium"
                        data-testid={`phone-${resource.id}`}
                      >
                        {resource.phone}
                      </a>
                    </div>
                  )}

                  {resource.website && (
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-globe text-muted-foreground text-sm"></i>
                      <a 
                        href={resource.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium text-sm"
                        data-testid={`website-${resource.id}`}
                      >
                        Visit Website <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                      </a>
                    </div>
                  )}

                  {/* Services */}
                  {resource.services && resource.services.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground">Services:</div>
                      <div className="flex flex-wrap gap-1">
                        {resource.services.map((service: string, index: number) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service.replace(/_/g, ' ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Eligibility */}
                  {resource.eligibility && (
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground">Eligibility:</div>
                      <div className="text-xs text-muted-foreground">{resource.eligibility}</div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4"
                    onClick={() => {
                      if (resource.website) {
                        window.open(resource.website, '_blank');
                      } else if (resource.phone) {
                        window.location.href = `tel:${resource.phone}`;
                      }
                    }}
                    data-testid={`contact-${resource.id}`}
                  >
                    <i className="fas fa-hand-holding-heart mr-2"></i>
                    Get Help
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12">
              <div className="text-center">
                <i className="fas fa-exclamation-triangle text-4xl text-muted-foreground mb-4"></i>
                <h3 className="text-lg font-semibold text-foreground mb-2">Resources Unavailable</h3>
                <p className="text-muted-foreground">
                  Legal aid resources are currently unavailable. Please try again later or call the hotline above.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">When to Seek Legal Help</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3">
              <i className="fas fa-home text-primary mt-1"></i>
              <div className="text-sm text-muted-foreground">
                You received an eviction notice or summons
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-dollar-sign text-primary mt-1"></i>
              <div className="text-sm text-muted-foreground">
                Landlord won't return your security deposit
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-tools text-primary mt-1"></i>
              <div className="text-sm text-muted-foreground">
                Housing conditions are unsafe or unhealthy
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-ban text-primary mt-1"></i>
              <div className="text-sm text-muted-foreground">
                Facing housing discrimination
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-credit-card text-primary mt-1"></i>
              <div className="text-sm text-muted-foreground">
                Dealing with debt collection issues
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Important Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <a 
                href="https://www.chicago.gov/city/en/depts/doh/provdrs/landlords/svcs/residential-landlord-and-tenant-ordinance.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-semibold text-foreground text-sm">Chicago RTLO Information</div>
                <div className="text-xs text-muted-foreground">Official city resources and ordinance text</div>
              </a>

              <a 
                href="https://cookcountylegalaid.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-semibold text-foreground text-sm">Cook County Legal Aid</div>
                <div className="text-xs text-muted-foreground">Comprehensive legal assistance portal</div>
              </a>

              <a 
                href="https://cvls.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="font-semibold text-foreground text-sm">CVLS Eviction Resources</div>
                <div className="text-xs text-muted-foreground">Volunteer legal services information</div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
