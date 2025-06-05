export const login = async (email: string, password: string) => {
  // Placeholder for API integration
  // Replace with actual API call using axios or fetch
  return new Promise<{ success: boolean; message?: string }>((resolve) => {
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'password') {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: 'Invalid credentials' });
      }
    }, 1000);
  });
};