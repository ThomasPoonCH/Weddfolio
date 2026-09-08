import { existsSync, renameSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

if (repositoryName && !repositoryName.endsWith('.github.io')) {
  const nestedAssets = join('dist', 'client', repositoryName, '_next');
  const publicAssets = join('dist', 'client', '_next');

  if (!existsSync(nestedAssets)) {
    throw new Error(`Expected generated assets at ${nestedAssets}`);
  }

  rmSync(publicAssets, { recursive: true, force: true });
  renameSync(nestedAssets, publicAssets);
  rmSync(join('dist', 'client', repositoryName), { recursive: true, force: true });
}
