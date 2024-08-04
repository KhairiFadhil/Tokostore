import { Inter } from "next/font/google";
import "../../globals.css";
import { Toaster } from "../../../components/ui/toaster";
import SessionWrapper from "@/lib/SessionWrapper";
import Navigation from "./layout/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TokoHitam - Toko Online",
  description: "Toko Hitam",
};

const dashboardList = [
  {
    category : 'Pages',
    icon : '',
    insideList : [
      {
        name : 'Transaction',
        link : '/dashboard/transaction',
        insideIcon: ''
      },
      {
        name : 'Products',
        link : '/dashboard/products',
        insideIcon: ''
      }
      
    ]
  },
  {
    category : 'Analytics',
    icon : '',
    insideList : [
      {
        name : 'Revenue',
        link : '/dashboard/revenue',
        insideIcon: ''
      },
      {
        name : 'Reports',
        link : '/dashboard/reports',
        insideIcon: ''
      } 
    ]
  },
  {
    category : 'User Management',
    icon : '',
    insideList : [
      {
        name : 'User Management',
        link : '/dashboard/user',
        insideIcon: ''
      }  
    ]
  }
]


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <div className="flex w-full h-full">
          <Navigation lists={dashboardList}/>
          {children}
          </div>
            <Toaster/>
        </SessionWrapper>
        </body>
    </html>
  );
}
