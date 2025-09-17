// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// App Features
export interface AppFeature extends CosmicObject {
  type: 'app-features';
  metadata: {
    feature_name?: string;
    description?: string;
    category?: {
      key: AppFeatureCategory;
      value: string;
    };
    icon?: {
      url: string;
      imgix_url: string;
    };
    priority?: {
      key: FeaturePriority;
      value: string;
    };
  };
}

export type AppFeatureCategory = 'ai_tutoring' | 'parental_control' | 'collaboration' | 'analytics';
export type FeaturePriority = 'high' | 'medium' | 'low';

// Benefits
export interface Benefit extends CosmicObject {
  type: 'benefits';
  metadata: {
    benefit_title?: string;
    description?: string;
    target_audience?: {
      key: BenefitAudience;
      value: string;
    };
    impact_type?: {
      key: ImpactType;
      value: string;
    };
  };
}

export type BenefitAudience = 'students' | 'parents' | 'teachers' | 'all';
export type ImpactType = 'social' | 'economic' | 'educational' | 'environmental';

// Blog Posts
export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    title?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    category?: {
      key: BlogCategory;
      value: string;
    };
    tags?: string;
  };
}

export type BlogCategory = 'study_tips' | 'app_updates' | 'parenting' | 'technology';

// Auth Pages
export interface AuthPage extends CosmicObject {
  type: 'auth-pages';
  metadata: {
    page_title?: string;
    page_type?: {
      key: AuthPageType;
      value: string;
    };
    heading_text?: string;
    subheading_text?: string;
    form_instructions?: string;
    security_notice?: string;
    background_image?: {
      url: string;
      imgix_url: string;
    };
    user_type?: {
      key: UserType;
      value: string;
    };
  };
}

export type AuthPageType = 'login' | 'signup' | 'password_recovery' | 'master_password_setup';
export type UserType = 'parent' | 'student' | 'both';

// App Settings
export interface AppSetting extends CosmicObject {
  type: 'app-settings';
  metadata: {
    setting_name?: string;
    setting_category?: {
      key: SettingCategory;
      value: string;
    };
    description?: string;
    instructions?: string;
    security_level?: {
      key: SecurityLevel;
      value: string;
    };
    requires_master_password?: boolean;
  };
}

export type SettingCategory = 'master_password' | 'app_blocking' | 'uninstall_protection' | 'parental_controls';
export type SecurityLevel = 'critical' | 'high' | 'medium';

// Security Features
export interface SecurityFeature extends CosmicObject {
  type: 'security-features';
  metadata: {
    feature_name?: string;
    feature_description?: string;
    how_it_works?: string;
    benefits?: string;
    target_user?: {
      key: UserType;
      value: string;
    };
    icon?: string;
  };
}

// User Flows
export interface UserFlow extends CosmicObject {
  type: 'user-flows';
  metadata: {
    flow_name?: string;
    flow_description?: string;
    step_by_step_guide?: string;
    user_type?: {
      key: UserType;
      value: string;
    };
    flow_category?: {
      key: FlowCategory;
      value: string;
    };
    estimated_time?: string;
  };
}

export type FlowCategory = 'onboarding' | 'daily_use' | 'troubleshooting' | 'settings';

// Dashboard Components
export interface DashboardComponent extends CosmicObject {
  type: 'dashboard-components';
  metadata: {
    component_name?: string;
    component_type?: {
      key: ComponentType;
      value: string;
    };
    description?: string;
    user_access?: {
      key: UserType;
      value: string;
    };
    features?: string;
    master_password_required?: boolean;
  };
}

export type ComponentType = 'widget' | 'panel' | 'modal' | 'sidebar';

// Study Libraries
export interface StudyLibrary extends CosmicObject {
  type: 'study-libraries';
  metadata: {
    library_name?: string;
    subject_area?: {
      key: SubjectArea;
      value: string;
    };
    description?: string;
    resource_types?: string[];
    grade_level?: {
      key: GradeLevel;
      value: string;
    };
    ai_curated?: boolean;
  };
}

export type SubjectArea = 'mathematics' | 'science' | 'english' | 'history' | 'computer_science' | 'general';
export type GradeLevel = 'elementary' | 'middle' | 'high' | 'college';

// Virtual Classrooms
export interface VirtualClassroom extends CosmicObject {
  type: 'virtual-classrooms';
  metadata: {
    classroom_name?: string;
    classroom_type?: {
      key: ClassroomType;
      value: string;
    };
    description?: string;
    features?: string[];
    max_participants?: number;
    unique_features?: string;
  };
}

export type ClassroomType = 'friends' | 'subject_based' | 'homework' | 'test_prep';

// Study Schedules
export interface StudySchedule extends CosmicObject {
  type: 'study-schedules';
  metadata: {
    schedule_name?: string;
    schedule_type?: {
      key: ScheduleType;
      value: string;
    };
    description?: string;
    features?: string;
    app_time_limits?: string;
    auto_block_after_limit?: boolean;
  };
}

export type ScheduleType = 'daily' | 'weekly' | 'custom' | 'exam_prep';

// Emergency Controls
export interface EmergencyControl extends CosmicObject {
  type: 'emergency-controls';
  metadata: {
    control_name?: string;
    control_type?: {
      key: ControlType;
      value: string;
    };
    description?: string;
    usage_instructions?: string;
    duration_options?: string[];
    master_password_required?: boolean;
  };
}

export type ControlType = 'emergency_override' | 'app_unblock' | 'schedule_pause' | 'full_disable';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Utility types for common patterns
export type OptionalMetadata<T> = Partial<T['metadata']>;

// Type guards for runtime validation
export function isAppFeature(obj: CosmicObject): obj is AppFeature {
  return obj.type === 'app-features';
}

export function isBenefit(obj: CosmicObject): obj is Benefit {
  return obj.type === 'benefits';
}

export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts';
}

export function isAuthPage(obj: CosmicObject): obj is AuthPage {
  return obj.type === 'auth-pages';
}

export function isStudyLibrary(obj: CosmicObject): obj is StudyLibrary {
  return obj.type === 'study-libraries';
}

export function isVirtualClassroom(obj: CosmicObject): obj is VirtualClassroom {
  return obj.type === 'virtual-classrooms';
}

// Error helper for Cosmic SDK
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}