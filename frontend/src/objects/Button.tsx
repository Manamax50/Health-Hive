export default function Button({buttonName}:{buttonName:string}){
    const lowerCaseButton = buttonName.toLowerCase();
    const className = `button ${lowerCaseButton}`;
    
    return(
        <button className ={className}>
            {buttonName}
        </button>
    )
}