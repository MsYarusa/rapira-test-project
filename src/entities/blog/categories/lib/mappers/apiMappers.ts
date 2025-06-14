import type { CategoryApi } from '../../api'
import type { Category } from '../../model/Category'

export function mapCategoryApiToCategory(categoryApi: CategoryApi): Category {
  const category: Category = {
    id: categoryApi.id,
    title: categoryApi.title,
  }

  return category
}
