import { features } from "../asset/Data";

export default function Features() {

  /* ---------- Common Styles ---------- */

  const styles = {
    section: "max-w-6xl mx-auto px-6 py-12 relative border-b-4 border-black",

    headerWrapper: "mb-10 md:mb-12",

    title:
      "text-4xl lg:text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-4 border-black shadow-retro",

    subtitle: "lg:text-2xl font-bold uppercase mt-4 italic",

    featureCard:
      "bg-white border-4 border-black rounded-md p-8 shadow-retro flex flex-col gap-4 group hover:-translate-y-2 transition-transform",

    iconBox:
      "w-14 h-14 border-4 border-black flex items-center justify-center",

    floatingIcon:
      "absolute border-4 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box",
  };

 

  return (
    <section className={styles.section}>
      <div className={styles.headerWrapper}>
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-[#4CAF50] border-4 border-black"></div>

          <h2 className={styles.title}>Features</h2>
        </div>

        <p className={styles.subtitle}>
          Everything you need to thrive on campus — in one place.
        </p>
      </div>

      {/* Features Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <div key={i} className={styles.featureCard}>
            <div className={`${styles.iconBox} ${feature.color}`}>
              <span className="material-symbols-outlined text-3xl">
                {feature.icon}
              </span>
            </div>

            <h3 className="text-2xl font-black uppercase">{feature.title}</h3>

            <p className="font-medium">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Floating Icons */}

      <div
        className={`${styles.floatingIcon} top-10 left-4 bg-[#4CAF50] -rotate-12`}
        style={{ "--rotation": "-12deg", animationDelay: "1.2s" }}
      >
        <span className="material-symbols-outlined text-white">
          calendar_today
        </span>
      </div>
    </section>
  );
}