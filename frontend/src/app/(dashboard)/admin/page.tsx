import {
  DashboardHeader,
  DashboardHeaderDescription,
  DashboardHeaderTitle,
  DashboardMain,
} from '@/components/dashboard/dashboard-items'
import { FaHome } from "react-icons/fa";


export default function Page() {
  return (
    <>
      <DashboardHeader>
        <DashboardHeaderTitle>
          <FaHome />
          Home
        </DashboardHeaderTitle>
        <DashboardHeaderDescription>
          Tela principal da aplicação.
        </DashboardHeaderDescription>
      </DashboardHeader>
      <DashboardMain></DashboardMain>
    </>
  )
}
