import { useEffect, useState } from 'react';
import HttpClient from '@/config/http.client';

export function useCurrentUser() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function updateUser() {
      const { data } = await HttpClient.instance.get('users/me');
      setUser(data);
    }

    updateUser();
  }, []);

  return user;
}
