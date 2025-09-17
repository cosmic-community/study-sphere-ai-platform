import { DashboardComponent } from '@/types';
import { Settings, Shield, BarChart3, Users } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface DashboardShowcaseProps {
  components: DashboardComponent[];
}

const componentIcons = {
  widget: BarChart3,
  panel: Settings,
  modal: Shield,
  sidebar: Users,
};

export default function DashboardShowcase({ components }: DashboardShowcaseProps) {
  const parentComponents = components.filter(
    comp => comp.metadata?.user_access?.key === 'parent' || comp.metadata?.user_access?.key === 'both'
  );
  
  const studentComponents = components.filter(
    comp => comp.metadata?.user_access?.key === 'student' || comp.metadata?.user_access?.key === 'both'
  );

  if (components.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Dashboard Components
            </h2>
            <p className="text-secondary-500">
              Dashboard components will be displayed here once content is available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Powerful Dashboard Controls
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Comprehensive management interface with role-based access controls 
            and intelligent automation features.
          </p>
        </div>

        <div className="space-y-16">
          {/* Parent Dashboard */}
          {parentComponents.length > 0 && (
            <div>
              <div className="flex items-center gap-3 justify-center mb-8">
                <Shield className="w-8 h-8 text-accent-600" />
                <h3 className="text-2xl font-bold text-secondary-900">Parent Dashboard</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {parentComponents.map((component) => {
                  const IconComponent = componentIcons[component.metadata?.component_type?.key || 'widget'] || Settings;
                  
                  return (
                    <div
                      key={component.id}
                      className="bg-gradient-to-br from-accent-50 to-white border border-accent-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-accent-100 p-3 rounded-lg flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-accent-600" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-secondary-900 mb-2">
                            {component.metadata?.component_name || component.title}
                          </h4>
                          
                          {component.metadata?.description && (
                            <p className="text-secondary-600 text-sm leading-relaxed mb-3">
                              {component.metadata.description}
                            </p>
                          )}
                          
                          {component.metadata?.features && (
                            <div className="prose prose-sm max-w-none">
                              <ReactMarkdown>
                                {component.metadata.features}
                              </ReactMarkdown>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mt-4">
                            <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-xs font-medium">
                              {component.metadata?.component_type?.value || 'Component'}
                            </span>
                            
                            {component.metadata?.master_password_required && (
                              <div className="flex items-center gap-1 text-xs text-accent-600">
                                <Shield className="w-3 h-3" />
                                <span>Master Password</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Student Dashboard */}
          {studentComponents.length > 0 && (
            <div>
              <div className="flex items-center gap-3 justify-center mb-8">
                <Users className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-bold text-secondary-900">Student Dashboard</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {studentComponents.map((component) => {
                  const IconComponent = componentIcons[component.metadata?.component_type?.key || 'widget'] || Settings;
                  
                  return (
                    <div
                      key={component.id}
                      className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary-600" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-secondary-900 mb-2">
                            {component.metadata?.component_name || component.title}
                          </h4>
                          
                          {component.metadata?.description && (
                            <p className="text-secondary-600 text-sm leading-relaxed mb-3">
                              {component.metadata.description}
                            </p>
                          )}
                          
                          {component.metadata?.features && (
                            <div className="prose prose-sm max-w-none">
                              <ReactMarkdown>
                                {component.metadata.features}
                              </ReactMarkdown>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mt-4">
                            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium">
                              {component.metadata?.component_type?.value || 'Component'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}