const BASIC_FONT_SIZE= 14
const BASIC_SPACE= 14
const BASIC_BORDER_RADIUS= 10
const BORDER_RADIUS_PACE= 4
const SPACE_PACE = 4
const PACE = 4
const BUTTON_SIZE = 50
const INPUT_HEIGHT = 55
export const THEME = {
    FONT_SIZE: {
        small:  BASIC_FONT_SIZE - PACE,
        normal: BASIC_FONT_SIZE,
        medium: BASIC_FONT_SIZE + PACE,
        large: BASIC_FONT_SIZE + 2*PACE
    },
    COLOR: {
        primaryColor : "white" ,
        secondaryColor:"#2596be" ,
        secondaryColorDark: "#410096",
        red: "rgb(200,0,0)",
        green: "green",
        white: "white",
        gray: "rgb(200,200,200)",
        black: "rgb(20,20,20)",
        white2: "rgb(180,180,180)",
        white3: "rgb(230,230,230)",
        blue: "blue",
        blue1: "#001261",
        blue2: "#8f98b7"
    },
    SPACE: {
        small: BASIC_SPACE- SPACE_PACE,
        medium: BASIC_FONT_SIZE + SPACE_PACE,
        large: BASIC_FONT_SIZE + 2*SPACE_PACE
    },
    BORDER_RADIUS:{
        small: BASIC_BORDER_RADIUS - BORDER_RADIUS_PACE,
        medium: BASIC_BORDER_RADIUS
    },
    HEIGHT: {
        input : INPUT_HEIGHT,
        button: BUTTON_SIZE,
    },
    Text: {
        APP_NAME: "Maket",
        welcome:"Welcome to maket",
        signIn:"signIn",
        signUp:"signUp",
        connexion:"connexion",
        email:"email",
        password:"password",
        forget_password:"reset password",
        CommandeTitle:"Ajouter produit",
        description:"Description",
        CommandeName:"nom produit",
        valider:"valider",
        quantite:"quantite",
        adresse:"adresse",
        

    },
    
}