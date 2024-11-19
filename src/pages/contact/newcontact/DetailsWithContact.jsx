// import React from "react";
import { Button } from "@material-tailwind/react";
import map from '../../../assets/images/map.svg'
export function ContactSection14() {
  return (
    <section className=" lg:py-5">
      <div className="container mx-auto text-center">

        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <img
            src={map}
            alt="map"
            className="w-full h-full lg:max-h-[510px]"
          />
          <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
          >
           
            <div className="flex gap-4">
              <Button variant="outlined" className=" btn max-w-fit">
                General inquiry
              </Button>
              <Button variant="outlined" className="btn max-w-fit">
                Product Support
              </Button>
            </div>
            <p className="text-xl">Messaging Admin</p>
                 <div className="flex gap-4">
              <Button variant="outlined" className=" btn max-w-fit hover:bg-red-300">
                General inquiry
              </Button>
              <Button variant="outlined" className="btn max-w-fit hover:bg-red-300">
                Product Support
              </Button>
            </div>
            
            <Button className="w-full" color="gray">
              Send message
            </Button>
            <Button className="w-full" color="gray">
              Send message
            </Button>
          </form>
        
          
        </div>
      </div>
    </section>
  );
}

export default ContactSection14;