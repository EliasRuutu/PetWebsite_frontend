import React, { useEffect } from "react";
import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
 
export function InputWithDropdown({sendDataToParent, sendData1ToParent}) {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const [telephoneNumber, setTelephoneNumber]  = React.useState(0);
  const [countryCode, setCountryCode] = React.useState("+254");

  sendDataToParent(telephoneNumber);
  sendData1ToParent(countryCode);

  
  const { name, flags, countryCallingCode } = countries[country];
  
  return (
    <div className="relative flex w-full rounded-md bg-[#F8F8F8]">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center rounded-r-none rounded-l-md border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 px-3"
          >
            <img
              src={flags.svg}
              alt={name}
              className="h-4 w-4 rounded-full object-cover"
            />
            {countryCallingCode}
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem] overflow-y-scroll">
          {countries.map(({ name, flags, countryCallingCode }, index) => {
            return (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2 p-2"
                onClick={() => {setCountry(index); setCountryCode(countryCallingCode)}}
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name} <span className="ml-auto">{countryCallingCode}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
        type="tel"
        placeholder="+(54) 000-000-0000"
        className="rounded-r-md !border-t-blue-gray-200 bg-[#F8F8F8] focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
        onChange={(e) => {setTelephoneNumber(e.target.value); }}
      />
    </div>
  );
}