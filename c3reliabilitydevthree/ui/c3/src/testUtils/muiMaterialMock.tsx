// eslint-disable-next-line @typescript-eslint/no-var-requires
const React = require('react');

type Props = { children?: React.ReactNode; [key: string]: any };

const passthrough = (Tag: keyof JSX.IntrinsicElements = 'div') =>
  ({ children, ...props }: Props) => React.createElement(Tag, props, children);

export const MenuItem = passthrough('div');
export const FormControl = passthrough('div');
export const Box = passthrough('div');
export const Button = passthrough('button');
export const Divider = passthrough('hr');
export const Switch = passthrough('input');
export const Select = passthrough('select');
export const Card = passthrough('div');
export const CardContent = passthrough('div');
export const Typography = passthrough('span');
export const CircularProgress = passthrough('div');
export const Alert = passthrough('div');
export const Paper = passthrough('div');
export const InputLabel = passthrough('label');
export const Grid = passthrough('div');
export const Chip = passthrough('div');
export const TextField = passthrough('input');
export const Menu = passthrough('div');
export const Dialog = passthrough('div');
export const DialogTitle = passthrough('div');
export const DialogContent = passthrough('div');
export const DialogActions = passthrough('div');
export const ListItemIcon = passthrough('span');

const MuiMaterialMock = {
  MenuItem,
  FormControl,
  Box,
  Button,
  Divider,
  Switch,
  Select,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Paper,
  InputLabel,
  Grid,
  Chip,
  TextField,
  Menu,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ListItemIcon,
};

export default MuiMaterialMock;
