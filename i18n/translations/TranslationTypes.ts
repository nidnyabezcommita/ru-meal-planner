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
  planner: {
    title: string,
    subtitle: string,
    buttons: {
        nextWeek: string,
        previousWeek: string,
        generatePlan: string,
        remove: string,
        decrease: string,
        increase: string,
        add: string,
    },
    today: string,
    select: string,
    discovery: {
        title: string,
        subtitle: string,
        search: {
            placeholder: string,
        },
        empty: string,
        all: string,
    }
  }
  grocery: {
    title: string,
    subtitle: string,
    banner: {
        title: string,
        subtitle: string,
        link: string
    },
    title2: string,
    empty: {
        title: string,
        subtitle: string
    },
    buttons: {
        all: string,
        sort: string,
        merge: string,
        group: string,
        export: string
    },
    mergePopup: {
        title: string,
        empty: string,
        fields: {
            addItem: {
                title: string,
                placeholder: string"
            },
            mergeInto: {
                title: string,
                placeholder: string"
            }
        },
        noMatches: string,
        buttons: {
            close: string,
            apply: string,
            merging: string,
        }
    },
    smartGroupPopup: {
        AItext: string,
        langText: string,
        fields: {
            AiProvider: {
                title: string,
            },
            model: {
                title: string,
            }
        },
        buttons: {
            close: string,
            run: string,
        }
    }
  },
  pantry: {
    title: string,
    subtitle: string,
    banner: {
        link: string
    },
    title2: string,
    subtitle2: string,
    empty: {
        title: string,
        subtitle: string
    },
    items: {
        title: string,
        remove: string
    },
    form: {
        title: string,
        subtitle: string,
        fields: {
            name: {
                title: string 
                placeholder: string
            },
            quantity: {
                title: string
            },
            unit: {
                title: string
            }
        },
        button: string
    },
    tip: {
        title: string,
        text: string
    }
  },
  chatbot: {
    title: string,
    AItext: string,
    message: string,
    fields: {
        q: {
            placeholder: string,
        }
    },
    thinking: string,
  },
  generatePlanModal: {
    title: string,
    subtitle: string 
    text: string,
    AItext: string,
    langText: string,
    dietary: string,
    buttons: {
        cancel: string,
        loading: string,
        generate: string"
    },
    diets: {
        any: string,
        vegan: string,
        paleo: string,
        lowCarb: string,
        vegetarian: string,
        keto: string,
        highProtein: string,
        mediterranean: string,
    }
  },
  mealDetailsModal: {
    noImageText: string,
    ingredients: string,
    servings: string,
    base: string,
    edit: string,
    viewOriginal: string,
    ingredientsList: {
        title: string,
    },
    instructions: {
        title: string,
        empty: {
            title: string,
            subtitle: string,
        },
        step: string,
        next: string,
        prev: string
    }
  }
}