import "../globals.css";
import styles from "./layout.module.css";

export const dynamic = "force-dynamic";


export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}
