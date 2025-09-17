import { StudyLibrary, VirtualClassroom } from '@/types';
import { BookOpen, Users, Video, MessageSquare } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface StudyEnvironmentsProps {
  libraries: StudyLibrary[];
  classrooms: VirtualClassroom[];
}

const subjectIcons = {
  mathematics: '📐',
  science: '🔬', 
  english: '📚',
  history: '🏛️',
  computer_science: '💻',
  general: '🎓',
};

const classroomIcons = {
  friends: Users,
  subject_based: BookOpen,
  homework: MessageSquare,
  test_prep: Video,
};

export default function StudyEnvironments({ libraries, classrooms }: StudyEnvironmentsProps) {
  if (libraries.length === 0 && classrooms.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Study Environments
            </h2>
            <p className="text-secondary-500">
              Study environments will be displayed here once content is available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Immersive Study Environments
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Curated learning spaces and collaborative environments designed to maximize 
            engagement, focus, and educational outcomes.
          </p>
        </div>

        <div className="space-y-16">
          {/* Study Libraries */}
          {libraries.length > 0 && (
            <div>
              <div className="flex items-center gap-3 justify-center mb-8">
                <BookOpen className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-bold text-secondary-900">Study Libraries</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {libraries.map((library) => {
                  const subjectKey = library.metadata?.subject_area?.key || 'general';
                  const subjectEmoji = subjectIcons[subjectKey] || '🎓';
                  
                  return (
                    <div
                      key={library.id}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-secondary-100"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-3xl">{subjectEmoji}</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-secondary-900">
                            {library.metadata?.library_name || library.title}
                          </h4>
                          {library.metadata?.subject_area && (
                            <div className="text-sm text-primary-600 font-medium">
                              {library.metadata.subject_area.value}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {library.metadata?.description && (
                        <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                          {library.metadata.description}
                        </p>
                      )}
                      
                      <div className="space-y-3">
                        {/* Resource Types */}
                        {library.metadata?.resource_types && library.metadata.resource_types.length > 0 && (
                          <div>
                            <div className="text-xs font-medium text-secondary-700 mb-2">Resources:</div>
                            <div className="flex flex-wrap gap-1">
                              {library.metadata.resource_types.map((type, index) => (
                                <span
                                  key={index}
                                  className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs"
                                >
                                  {type}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Grade Level & AI Curated */}
                        <div className="flex items-center justify-between">
                          {library.metadata?.grade_level && (
                            <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs">
                              {library.metadata.grade_level.value}
                            </span>
                          )}
                          
                          {library.metadata?.ai_curated && (
                            <div className="flex items-center gap-1 text-xs text-primary-600">
                              <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                              <span>AI Curated</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Virtual Classrooms */}
          {classrooms.length > 0 && (
            <div>
              <div className="flex items-center gap-3 justify-center mb-8">
                <Users className="w-8 h-8 text-secondary-600" />
                <h3 className="text-2xl font-bold text-secondary-900">Virtual Classrooms</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {classrooms.map((classroom) => {
                  const classroomTypeKey = classroom.metadata?.classroom_type?.key || 'friends';
                  const IconComponent = classroomIcons[classroomTypeKey] || Users;
                  
                  return (
                    <div
                      key={classroom.id}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-secondary-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-secondary-100 p-3 rounded-lg flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-secondary-600" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-secondary-900 mb-2">
                            {classroom.metadata?.classroom_name || classroom.title}
                          </h4>
                          
                          {classroom.metadata?.description && (
                            <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                              {classroom.metadata.description}
                            </p>
                          )}
                          
                          {/* Features */}
                          {classroom.metadata?.features && classroom.metadata.features.length > 0 && (
                            <div className="mb-4">
                              <div className="text-xs font-medium text-secondary-700 mb-2">Features:</div>
                              <div className="flex flex-wrap gap-2">
                                {classroom.metadata.features.map((feature, index) => (
                                  <span
                                    key={index}
                                    className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Unique Features */}
                          {classroom.metadata?.unique_features && (
                            <div className="prose prose-sm max-w-none mb-4">
                              <ReactMarkdown>
                                {classroom.metadata.unique_features}
                              </ReactMarkdown>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-xs font-medium">
                              {classroom.metadata?.classroom_type?.value || 'Classroom'}
                            </span>
                            
                            {classroom.metadata?.max_participants && (
                              <div className="text-xs text-secondary-500">
                                Max {classroom.metadata.max_participants} participants
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
        </div>
      </div>
    </section>
  );
}