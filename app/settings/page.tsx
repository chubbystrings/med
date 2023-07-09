"use client";
import { useState } from "react";

import Tab from "@/components/tab/Tab";

import RolesTab from "@/components/roles/RolesTab";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const [view, setView] = useState("role");

  const handleSetView = (value: string) => {
    setView(value);
  };

  return (
    <Layout>
      <div>
        <h2 className="display-medium">Settings</h2>
        <p className="text-gray-400 text-sm font-normal">
          Manage your team and preferences here.
        </p>
      </div>

      <div className="w-full">
        <Tab view={view} setView={(value: string) => handleSetView(value)} />
      </div>

      {view === "role" ? <RolesTab /> : <h2>Under Construction</h2>}
    </Layout>
  );
}
