// Source of truth for pain choices lives in content/pain-choices.json.
// Update that file to add, rename, reorder, or retire choices.
import data from '~~/content/pain-choices.json'

export function usePainChoices(): string[] {
  return data.choices
}
