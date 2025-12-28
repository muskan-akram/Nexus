import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const DashboardLayout: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Determine which sidebar items to show based on role
  const roleBasedSidebarProps = {
    role: user?.role || 'entrepreneur',
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar role={user?.role || 'entrepreneur'} userId={user?.id || ''} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {user?.role === 'investor' && (
              <Outlet context={{ role: 'investor' }} />
            )}
            {user?.role === 'entrepreneur' && (
              <Outlet context={{ role: 'entrepreneur' }} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
