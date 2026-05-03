const projectFileModules = import.meta.glob('../project_files/*', { eager: true, import: 'default' });

export function getProjectFile(fileName) {
  const modulePath = `../project_files/${fileName}`;
  return projectFileModules[modulePath] ?? null;
}

export function getAvailability(fileName) {
  return getProjectFile(fileName)
    ? { status: 'Available', fileUrl: getProjectFile(fileName) }
    : { status: 'Not available', fileUrl: null };
}
