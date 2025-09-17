import { cosmic } from './cosmic';
import { 
  AppFeature, 
  Benefit, 
  BlogPost, 
  AuthPage, 
  StudyLibrary, 
  VirtualClassroom, 
  StudySchedule, 
  EmergencyControl, 
  DashboardComponent,
  SecurityFeature,
  UserFlow,
  AppSetting,
  hasStatus 
} from '@/types';

// App Features
export async function getAppFeatures(): Promise<AppFeature[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'app-features' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as AppFeature[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch app features');
  }
}

// Benefits
export async function getBenefits(): Promise<Benefit[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'benefits' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Benefit[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch benefits');
  }
}

// Blog Posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateB - dateA;
    }) as BlogPost[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch blog posts');
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'blog-posts',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    
    return response.object as BlogPost;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch blog post');
  }
}

// Auth Pages
export async function getAuthPages(): Promise<AuthPage[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'auth-pages' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as AuthPage[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch auth pages');
  }
}

export async function getAuthPage(slug: string): Promise<AuthPage | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'auth-pages',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as AuthPage;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch auth page');
  }
}

// Study Libraries
export async function getStudyLibraries(): Promise<StudyLibrary[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'study-libraries' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as StudyLibrary[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch study libraries');
  }
}

// Virtual Classrooms
export async function getVirtualClassrooms(): Promise<VirtualClassroom[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'virtual-classrooms' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as VirtualClassroom[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch virtual classrooms');
  }
}

// Study Schedules
export async function getStudySchedules(): Promise<StudySchedule[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'study-schedules' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as StudySchedule[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch study schedules');
  }
}

// Emergency Controls
export async function getEmergencyControls(): Promise<EmergencyControl[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'emergency-controls' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as EmergencyControl[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch emergency controls');
  }
}

// Dashboard Components
export async function getDashboardComponents(): Promise<DashboardComponent[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'dashboard-components' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as DashboardComponent[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch dashboard components');
  }
}

// Security Features
export async function getSecurityFeatures(): Promise<SecurityFeature[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'security-features' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as SecurityFeature[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch security features');
  }
}

// User Flows
export async function getUserFlows(): Promise<UserFlow[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'user-flows' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as UserFlow[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch user flows');
  }
}

// App Settings
export async function getAppSettings(): Promise<AppSetting[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'app-settings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as AppSetting[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch app settings');
  }
}