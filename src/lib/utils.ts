// Utilidades generales
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('es-ES');
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function calculateDaysSinceDate(date: string): number {
  const now = new Date();
  const pastDate = new Date(date);
  const differenceInTime = now.getTime() - pastDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays;
}

export function getInitials(fullName: string): string {
  return fullName
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
