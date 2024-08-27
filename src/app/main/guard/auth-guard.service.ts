import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const currentUser = authService.currentUserValue;
    if (currentUser) {
      // logged in so return true
      return true;
    }
  router.navigate(['/login']);
  return false;
};
