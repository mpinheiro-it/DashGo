import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";


export function SidebarNav(){
    return(
        <Stack spacing="12" align="flex-start">
                
                <NavSection title={"GERAL"}>

                        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                        <NavLink icon={RiContactsLine}>Users</NavLink>

                </NavSection>

                <NavSection title={"AUTOMAÇÃO"}>
                    
                        <NavLink icon={RiInputMethodLine}>Forms</NavLink>
                        <NavLink icon={RiGitMergeLine}>Automation</NavLink>                        
                    
                </NavSection>
                
            </Stack>
    )
}