import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

 
export function CheckboxHorizontalListGroup() {
  return (
    <Card className="w-full">
      <List className="flex-row">
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-Dirección"
            className="flex w-full cursor-pointer items-center px-1 py-2"
          >
            <ListItemPrefix className="mr-1">
              <Checkbox
                id="horizontal-list-Dirección"
                ripple={false}
                className="hover:before:opacity-0 accent-[#3D9FAD]"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-[12px]">
              Dirección
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-Nombre"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="horizontal-list-Nombre"
                ripple={false}
                className="hover:before:opacity-0 accent-[#3D9FAD]"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-[12px]">
              Nombre
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-telefono"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="horizontal-list-telefono"
                ripple={false}
                className="hover:before:opacity-0 accent-[#3D9FAD]"
                
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-[12px]">
              telefono
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-Pais"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="horizontal-list-Pais"
                ripple={false}
                className="hover:before:opacity-0 accent-[#3D9FAD]"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-[12px]">
              Pais
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-Correo"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="horizontal-list-Correo"
                ripple={false}
                className="hover:before:opacity-0 accent-[#3D9FAD]"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-[12px]">
              Correo
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
}