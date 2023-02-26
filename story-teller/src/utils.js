export const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

// Fonction pour déconnecter l'utilisateur
export const handleLogout = () => {
    localStorage.removeItem('token');
    push('/');
  }

  console.log (handleLogout);   