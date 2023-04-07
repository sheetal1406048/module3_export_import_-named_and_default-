const laptop = "Asus, HP";
export{laptop}; //variable name = export name = Import name (named export import)

//exporting function

function mobilePhone(){
    console.log("Mobile Phones from china are going to exported in Bangladesh")
}

function headPhone(){
    console.log(" Head Phones from china are going to exported in Bangladesh")
}

export{mobilePhone,headPhone}


//exporting class

class myChina{
    toys(){
        alert("toys are purchased from china")
    }
}

export{myChina}

//default export import


class myClass{
    constructor(a,b){
        console.log("we want to export the sum to Bangladesh. Sum = ", a+b)
    }

    demo(){
        console.log("hi this is default export import")
    }
}

export default myClass;















