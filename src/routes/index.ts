/* eslint-disable import/no-unresolved */
import HomeIcon from '@mui/icons-material/Home';
import TableViewIcon from '@mui/icons-material/TableView';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export const MAIN = '/' as const;
export const SEARCH = '/search' as const;

type IconType = OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
  muiName: string;
};

export type RouteType = {
  label: string;
  icon: IconType;
  path: typeof MAIN | typeof SEARCH;
};

export const ROUTES: RouteType[] = [
  { label: 'Home', path: MAIN, icon: HomeIcon },
  { label: 'Search Tunes', path: SEARCH, icon: TableViewIcon },
];
