export interface TranslationTypes {
  addmealmodal: {
        title: {
            edit: string,
            add: string
        },
        subtitle: string,
        fields: {
            name: string,
            tag: string,
            servings: string,
            url: string,
            image: string,
            language: string,
            instructions: string,
            ingredients: string,
            calories: string,
            protein: string,
            fat: string,
            carbs: string
        },
        placeholders: {
            name: string,
            tag: string,
            ingredient: string,
            calories: string,
            protein: string,
            fat: string,
            carbs: string,
            amount: string
        },
        links: {
            addStep: string,
            fetchInstructions: string,
            estimate: string,
            addIngredient: string
        },
        texts: {
            noImage: string,
            noInstructions: string
        },
        buttons: {
            upload: string,
            camera: string,
            url: string,
            add: string,
            cancel: string,
            save: string
        }
  }
}