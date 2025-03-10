'use client';

import { useTranslation } from "react-i18next";


export default function Home() {
  const { t } = useTranslation();

  return (
    <>
    <h1>{t("Hero.title")}</h1>
    <p>{t("Hero.description")}</p>
    </>
  );
}
