# CUERT-Inventory-System

## folder structure

```bash
src
│
├── assets
│
├── components
│
├── contexts
│
├── hooks
│
├── layouts
│
├── pages
│
├── services
│
├── styles
│
├── utils
│
└── features
    ├── assets
    ├── components
    ├── contexts
    ├── hooks
    ├── layouts
    ├── pages
    ├── services
    └── utils
```

`assets` - contains all the static files like images, fonts, etc (e.g. `img.png`).

`components` - contains individual components that are used in the pages (`card.jsx`).

`contexts` - contains the contexts needed in feature or in the whole app (e.g. `AuthProvider.jsx`).

`hooks` - contains the custom hooks (e.g. `useAuth.js`).

`layouts` - contains the layouts used in the pages (e.g. `AppLayout.jsx`).

`pages` - contains the pages (e.g. `NotFound.jsx`, `Login.jsx`).

`services` - contains the services used in the app (e.g. `auth.js`).

`styles` - contains the global styles.

`utils` - contains the utility functions (e.g. `formatDate.js`).

`features` - contains the features of the app (e.g. `auth`, `dashboard`).

each feature has the same folder structure as the root folder.

> NOTE: You don't need to add all folders in each feature. Just add the folders that you need.

> NOTE: Any component/page add in its individual folder.

> NOTE: I created styles folder just for the global styles. you don't need to add it in each feature.

## example styling W. styled in MUI

in `Login.styled.js`

using template literals

```js
import { styled } from "@mui/material";

export const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;
```

using object

```js
import { styled } from "@mui/material";

export const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
```

passing props in both

```js
import { styled } from "@mui/material";

export const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: (props) => props.theme.palette.primary.main,
});

// another way

export const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
}));
```

```js
import { styled } from "@mui/material";

export const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.main};
`;
```
