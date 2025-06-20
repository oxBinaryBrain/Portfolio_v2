
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  console.log('Attempting to submit contact form with data:', data);
  
  try {
    // Validate data before submission
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new Error('All fields are required');
    }

    if (!data.email.includes('@')) {
      throw new Error('Invalid email format');
    }

    // Log Firebase connection status
    console.log('Firebase Firestore instance:', db ? 'Available' : 'Not available');
    console.log('Submitting to Firestore collection: contacts');
    
    const contactData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      subject: data.subject.trim(),
      message: data.message.trim(),
      timestamp: serverTimestamp(),
      status: 'new',
      createdAt: new Date().toISOString()
    };
    
    console.log('Prepared data for submission:', contactData);
    
    const contactsCollection = collection(db, 'contacts');
    console.log('Collection reference created');
    
    const docRef = await addDoc(contactsCollection, contactData);
    
    console.log('Contact form submitted successfully with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes('Missing or insufficient permissions')) {
        console.error('Firebase permission error - check Firestore rules');
        throw new Error('Database permissions error. Please check Firestore rules.');
      } else if (error.message.includes('network') || error.message.includes('transportError')) {
        console.error('Firebase network error:', error.message);
        throw new Error('Network error. Please check your internet connection and Firebase configuration.');
      } else if (error.message.includes('Missing environment variables')) {
        console.error('Firebase configuration error:', error.message);
        throw new Error('Firebase configuration error. Please check your environment variables.');
      } else {
        console.error('Other Firebase error:', error.message);
        throw new Error(`Submission failed: ${error.message}`);
      }
    }
    
    throw new Error('Failed to submit contact form. Please try again.');
  }
};
