export default {
  title: 'Section',
  description: 'Definicja sekcji na stronie onepager',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł sekcji',
      required: true,
      description: 'Nagłówek sekcji',
    },
    {
      name: 'content',
      type: 'markdown',
      title: 'Treść sekcji',
      description: 'Markdown dla treści sekcji',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Obraz sekcji',
      description: 'Opcjonalny obraz dla sekcji',
      options: {
        maxSize: '500KB',
      },
    },
  ],
}