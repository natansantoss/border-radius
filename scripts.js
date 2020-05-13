const borderRadius = (ver,hor) => {

    const position = `${ver}-${hor}`
    
    setTimeout(() => {
        var value = document.querySelector(`#${position}`).value
        var border = document.querySelector("#generator")
        var property = document.querySelector(`.${position}`)
    
        if(value <= 150){
            if(ver === "top" && hor === "left"){
            
                border.style.borderTopLeftRadius = `${value}px`
                property.innerHTML = `border-top-left-radius: ${value}px`
                
            }
            if (ver === "top" && hor === "right"){
            
                border.style.borderTopRightRadius = `${value}px`
                property.innerHTML = `border-top-right-radius: ${value}px`

            }
            if (ver === "bottom" && hor === "left"){
            
                border.style.borderBottomLeftRadius = `${value}px`
                property.innerHTML = `border-bottom-left-radius: ${value}px`
                
            }
            if (ver === "bottom" && hor === "right"){
            
                border.style.borderBottomRightRadius = `${value}px`
                property.innerHTML = `border-bottom-right-radius: ${value}px`
                
            }
        } else {
            if(ver === "top" && hor === "left"){
            
                border.style.borderTopLeftRadius = "150px"
                property.innerHTML = `border-top-left-radius: ${value}px`
                
            }
            if(ver === "top" && hor === "right"){
            
                border.style.borderTopRightRadius = "150px"
                property.innerHTML = `border-top-right-radius: ${value}px`
                
            }
            if(ver === "bottom" && hor === "left"){
            
                border.style.borderBottomLeftRadius = "150px"
                property.innerHTML = `border-bottom-left-radius: ${value}px`
                
            }
            if(ver === "bottom" && hor === "right"){
            
                border.style.borderBottomRightRadius = "150px"
                property.innerHTML = `border-bottom-right-radius: ${value}px`
                
            }
        }
        
    }, 300)
    
}