import { Tooltip, TooltipProps, styled, tooltipClasses } from '@mui/material';

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202B41',
    color: '#fff',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}));
export default CustomTooltip;
