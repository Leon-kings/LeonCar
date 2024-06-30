import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
 
function FormCarRFental() {
  return (
    <>
    <div className="left"></div>
    <div className="left">
    <Card color="transparent" shadow={false}>
    <h2 className="text">Fill It Up</h2>
    <Typography color="gray" className="mt-1 font-normal">
      Nice to meet you! Enter your details to register.
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue" className="-mb-3">
         Input Your Name
        </Typography>
        <Input
          size="lg"
          placeholder="name"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue" className="-mb-3">
          Your Email
        </Typography>
        <Input
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue" className="-mb-3">
          Category
        </Typography>
        <Input
          type="text"
          size="lg"
          placeholder="Sedni , Van , Bus , Truck"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
                          <div className="my-4 flex items-center gap-4">
                    <div>
                      <Typography
                        variant="small"
                        color="blue"
                        className="mb-2 font-medium"
                      >
                       Starts
                      </Typography>
                      <Input
                        maxLength={5}
                        // value={formatExpires(cardExpires)}
                        // onChange={(event) => setCardExpires(event.target.value)}
                        containerProps={{ className: "min-w-[72px]" }}
                        type="date"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue"
                        className="mb-2 font-medium"
                      >
                        Ends
                      </Typography>
                      <Input
                        maxLength={4}
                        containerProps={{ className: "min-w-[72px]" }}
                        type="date"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                  </div>


      </div>

      <Button className="button mt-6" >
        Book
      </Button>
    </form>
  </Card>
  </div>
  <div className="left"></div>
  </>
  )
}

export default FormCarRFental