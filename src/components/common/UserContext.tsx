import React from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface UserContextType {
    user: String | null;
    setUser: Dispatch<SetStateAction<string | null>>;
  }

export const UserContext = React.createContext<UserContextType>({user: null, setUser: (x) => {}});//
//kontekst jest obiektem, który przechowuje pewne dane i udostępnia je wszystkim komponentom w drzewie komponentów, które są z nim połączone.
//Dzięki temu, że jest on udostępniany na poziomie najwyższego komponentu, to wszystkie komponenty w aplikacji będą miały do niego dostęp.
//W ten sposób możemy przechowywać dane, które będą współdzielone przez wiele komponentów.
