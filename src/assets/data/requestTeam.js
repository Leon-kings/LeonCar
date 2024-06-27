export const inputs=[
  
 
    {
      id:1,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage:"email should be valid and should incloude @ symbols",
      label:"email",
      required:true
    },
 
    {
      id:2,
      name:"telephone",
      type:"telephone",
      placeholder:"+25078799999",
      errorMessage:"Oh!! Phone number is required",
      label:"Phone Number",
     
      required:true
    },
    {
        id:3,
        name:"routeNumber",
        type:"text",
        placeholder:"KN 45 Av",
        errorMessage:"Oh!! exact routes is required",
        label:"Route",
        required:true
      },
      {
        id:4,
        name:"address",
        type:"text",
        placeholder:"Kigali",
        errorMessage:"Oh!! exact address is required",
        label:"Adress",
        required:true
      },
      {
        id:5,
        name:"problem",
        type:"textarea",
        placeholder:"Define Your Problem",
        errorMessage:"Oh!! Describe help you need",
        label:"Problem",
        required:true
      },
  ];