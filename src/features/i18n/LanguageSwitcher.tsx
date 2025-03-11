'use client';

import useLanguageSwitcher from '@/features/i18n/useLanguageSwitcher';
import styles from './LanguageSwitcher.module.css';
import SpanishFlagIcon from '../ui/icons/SpanishFlagIcon';
import BrittishFlagIcon from '../ui/icons/BritishFlagIcon';
// import ChevronDownIcon from '@/features/ui/icons/ChevronDownIcon';

export default function LanguageSwitcher() {
  const { languages, currentLanguage, handleSwitch, isDropdownVisible, toggleDropdown } =
    useLanguageSwitcher();

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownTrigger}
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-controls="language-dropdown"
      >
        <div className={styles.button}>
          <span>{currentLanguage?.label}</span>
        {currentLanguage?.label === 'English' ? (
         <BrittishFlagIcon className={styles.flag} />
        ) : (
          <SpanishFlagIcon className={styles.flag} />
        ) }
        
        </div>
      </div>
      {isDropdownVisible && (
        <div className={styles.dropdownMenu} id="language-dropdown" role="menu">
          <div>
            {languages.map(({ code, label }) => (
              <p key={code} onClick={() => handleSwitch(code)}>
                {label}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
