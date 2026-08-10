export interface TranslationTypes {
  app: {
    logo: {
        title: string,
        subtitle: string,
    },
    nav: {
        dashboard: string,
        planner: string,
        grocery: string,
        pantry: string,
        familySync: string,
        chef: {
            title: string,
            subtitle: string,
        }
    },
    mobileNav: {
        home: string,
        planner: string,
        grocery: string,
        pantry: string
        settings: string,
    },
    pageTitle: {
        dashboard: string,
        planner: string,
        grocery: string,
        pantry: string
        preferences: string,
        appName: string,
    },
    placeholders: {
        search: string,
    },
    buttons: {
        theme: {
            light: string,
            dark: string,
        },
        notifications: string,
    }
  },
  addMealModal: {
        title: {
            edit: string,
            add: string
        },
        subtitle: string,
        fields: {
            name: {
                label: string,
                placeholder: string,
            },
            tag: {
                label: string,
                placeholder: string,
            },
            servings: {
                label: string,
                placeholder: string,
            },
            url: {
                label: string,
                placeholder: string,
            },
            image: {
                label: string,
                placeholder: string,
            },
            language: {
                label: string,
                placeholder: string,
            },
            instructions: {
                label: string,
                placeholder: string,
            },
            step: {
                label: string,
                placeholder: string,
            },
            ingredients: {
                label: string,
                placeholder: string,
            },
            ingredient: {
                label: string,
                placeholder: string,
            },
            amount: {
                label: string,
                placeholder: string,
            },
            calories: {
                label: string,
                placeholder: string,
            },
            protein: {
                label: string,
                placeholder: string,
            },
            fat: {
                label: string,
                placeholder: string,
            },
            carbs: {
                label: string,
                placeholder: string,
            },
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
  },
  familySyncModal: {
    title: string,
    text: string,
    fields: {
        code: string,
    },
    buttons: {
       cancel: string,
       save: string
    }
  },
  dashboard: {
    pageTitle: string,
    pageSubtitle: string,
    buttons: {
        currentWeek: string,
        nextWeek: string,
        previousWeek: string,
        importRecipe: string,
        addMeal: string,
    },
    widgets: {
        calories: {
            title: string,
            subtitle: string,
        },
        protein: {
            title: string,
            units: string,
        },
        carbs: {
            title: string,
            units: string,
        },
        fat: {
            title: string,
            units: string,
        }
    },
    weeklyOverview: {
        title: string,
        links: {
            viewCalendar: string,
            recipeDetails: string,
        },
        today: string,
        count: string,
        empty: string,
    },
    grocery: {
        title: string,
        empty: string,
        links: {
            open: string,
        }
    },
    pantry: {
        title: string,
        empty: string,
        alert: {
            title: string,
            amount: string,
        }
    },
    promo: {
        title: string,
        text: string,
        button: string,
    },
    recipes: {
      title: string,
      meal: string,
      meals: string,
      search: {
        placeholder: string,
      },
      all: string,
      empty: {
        title: string,
        subtitle: string,
      }
    }
  } 
}