export function EpisodeNumberFormator(str: string): string {
    const parts = str.split('$');
    const episodeId = parts[2];
    const slug = parts[0];
  
    return `${slug}?ep=${episodeId}`;
  }