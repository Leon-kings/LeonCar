import React from "react";
// import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  // Select,
  // Option,
} from "@material-tailwind/react";
import {
  // BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
 
function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];
 
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
 
  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}
 
function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}
 
export default function CheckoutForm() {
  // const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");
 
  return (<>
  <h2 className="head">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa officiis assumenda, quaerat tempora soluta quisquam odit optio! Autem sint sunt obcaecati omnis fugit, eaque quae, nihil et blanditiis illo quisquam!</h2>
    <div className="left"></div>
    <Card className="w-full max-w-[24rem] content-center">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center"
      >
        <div className="mb-4 h-20 p-6 text-white">
          {type === "card" ? (
             <img alt="card " className="w-29 " src="https://time.com/personal-finance/static/84016af8afe9681354d097200e07945e/ca7ff/credit-card-types.jpg" />
          ) : (
            <img alt="paypal " className="w-29 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZipoo-UnqLEJ2FRDl95VR7hHVnO3wPQxvw&s" />
          )}
        </div>
        
      </CardHeader>
      <CardBody>
        <Tabs >
          <TabsHeader className="relative z-0 ">
            <Tab className="button" value="card" onClick={() => setType("card")}>
              Pay with Card
            </Tab>
            <Tab className="btn" value="paypal" onClick={() => setType("paypal")}>
              Pay with PayPal
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "card" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "card" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="card" className="p-0">
              <form className="mt-12 flex flex-col gap-4" >
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Your Email
                  </Typography>
                  <Input
                    type="email"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
 
                <div className="my-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium "
                  >
                    Card Details
                  </Typography>
 
                  <Input
                    maxLength={19}
                    value={formatCardNumber(cardNumber)}
                    onChange={(event) => setCardNumber(event.target.value)}
                    icon={
                      <CreditCardIcon className="absolute left-0  h-4 w-4 text-blue-gray-300" />
                    }
                    placeholder="0000 0000 0000 0000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <div className="my-4 flex items-center gap-4">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Expires
                      </Typography>
                      <Input
                        maxLength={5}
                        value={formatExpires(cardExpires)}
                        onChange={(event) => setCardExpires(event.target.value)}
                        containerProps={{ className: "min-w-[72px]" }}
                        placeholder="00/00"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        CVC
                      </Typography>
                      <Input
                        maxLength={4}
                        containerProps={{ className: "min-w-[72px]" }}
                        placeholder="000"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                  </div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Holder Name
                  </Typography>
                  <Input
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium px-3 py-3"
                  >
                   Amount
                  </Typography>
                  <Input
                    placeholder="24$"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <Button className="btn" size="lg">Pay Now</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60 px-3 py-3"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
            <TabPanel value="paypal" className="p-0">
              <form className="mt-12 flex flex-col gap-4">
                <div>
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="mb-4 font-medium px-3 py-3"
                  >
                    Personal Details
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium px-3 py-3"
                  >
                    Your Email
                  </Typography>
                  <Input
                    type="email"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="my-4 flex items-center gap-4">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                       Country
                      </Typography>
                      <Input
                        maxLength={5}
                        value={formatExpires(cardExpires)}
                        onChange={(event) => setCardExpires(event.target.value)}
                        containerProps={{ className: "min-w-[72px]" }}
                        placeholder="Rwanda"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        City
                      </Typography>
                      <Input
                        maxLength={4}
                        containerProps={{ className: "min-w-[72px]" }}
                        placeholder="Kigali"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                  </div>
 
                <div className="my-6">
              
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mt-4 -mb-2 font-medium"
                  >
                    Postal Code
                  </Typography>
                  <Input
                    placeholder="0000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 px-3 py-3"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{ className: "mt-4" }}
                  />
                </div>
                <Button className="btn" size="lg">pay with paypal</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center justify-center gap-2 font-medium opacity-60 px-3 py-3"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
    </>
  );
}