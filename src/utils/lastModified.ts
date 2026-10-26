import { execFileSync } from 'node:child_process';
import { statSync } from 'node:fs';

/** Last commit date of a file, falling back to its mtime for uncommitted files. */
export function lastModified(filePath: string): Date {
	try {
		const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', filePath], {
			encoding: 'utf8',
		}).trim();
		if (iso) return new Date(iso);
	} catch {
		// Not a git checkout (e.g. a CI tarball); fall through to mtime.
	}
	return statSync(filePath).mtime;
}
