export const questions = [
    [
        {
            question: "Czym są 'reusable components' w React?",
            a: "Fragmenty kodu w React, które można wielokrotnie używać w różnych częściach aplikacji",
            b: "Komponenty, które można użyć tylko raz w aplikacji",
            c: "Komponenty, które nie są dostępne do ponownego wykorzystania",
            d: "Komponenty, które nie mogą posiadać stanu",
            answer: "Fragmenty kodu w React, które można wielokrotnie używać w różnych częściach aplikacji"
        },
        {
            question: "Jakie są korzyści z ponownego wykorzystywania komponentów w React?",
            a: "Łatwe wprowadzanie zmian w całej aplikacji",
            b: "Zwiększenie spójności i jednorodności interfejsu użytkownika",
            c: "Oszczędność czasu i wysiłku",
            d: "Wszystkie powyższe",
            answer: "Wszystkie powyższe"
        },
        {
            question: "Jakie są najlepsze praktyki dotyczące tworzenia ponownie wykorzystywalnych komponentów w React?",
            a: "Tworzenie skomplikowanych komponentów o wielu funkcjonalnościach",
            b: "Tworzenie komponentów, które są małe i jednoznacznie określają swoje funkcjonalności",
            c: "Przekazywanie wielu elementów do stanu komponentu",
            d: "Nieelastyczne wykorzystanie zdarzeń",
            answer: "Tworzenie komponentów, które są małe i jednoznacznie określają swoje funkcjonalności"
        }
    ],
    [
        {
            question: "Czym są functions as props (funkcja jako właściwość) w React?",
            a: "Funkcje przekazywane jako parametry do innych funkcji",
            b: "Funkcje, które są zdefiniowane wewnątrz komponentów React",
            c: "Funkcje, które są importowane do plików React",
            d: "Funkcje przekazywane jako właściwości do komponentów React",
            answer: "Funkcje przekazywane jako właściwości do komponentów React"
        },
        {
            question: "Jak przekazać funkcję jako właściwość do komponentu React?",
            a: "Przez dodanie atrybutu 'function' do tagu HTML",
            b: "Przez przekazanie funkcji jako wartości atrybutu 'props' w komponencie nadrzędnym",
            c: "Przez użycie hooka w komponencie potomnym",
            d: "Przez wywołanie funkcji bezpośrednio w komponencie potomnym",
            answer: "Przez przekazanie funkcji jako wartości atrybutu 'props' w komponencie nadrzędnym"
        },
        {
            question: "Dlaczego 'functions as props' są używane w React?",
            a: "Aby umożliwić przekazywanie funkcji między komponentami",
            b: "Aby wykonać pewne zadanie po kliknięciu lub innej interakcji użytkownika",
            c: "Aby umożliwić komponentom dostęp do stanu innych komponentów",
            d: "Aby ułatwić tworzenie komponentów",
            answer: "Aby wykonać pewne zadanie po kliknięciu lub innej interakcji użytkownika"
        }

    ],
    [
        {
            question: "Do czego służy hook useEffect w React?",
            a: "Do renderowania komponentów",
            b: "Do pobierania danych z serwera",
            c: "Do wykonywania efektów ubocznych w komponencie funkcyjnym",
            d: "Do tworzenia stanu w komponencie klasowym",
            answer: "Do wykonywania efektów ubocznych w komponencie funkcyjnym"
        },
        {
            question: "Kiedy hook useEffect jest wywoływany?",
            a: "Podczas renderowania komponentu",
            b: "Po zakończeniu renderowania komponentu",
            c: "Kiedy wartości w tablicy zależności ulegają zmianie",
            d: "Kiedy użytkownik dokona interakcji z komponentem",
            answer: "Po zakończeniu renderowania komponentu"
        },
        {
            question: "Co zwraca funkcja przekazywana do hooka useEffect?",
            a: "Wartość logiczną określającą, czy hook powinien być ponownie wywołany",
            b: "Nowy stan komponentu",
            c: "Efekt uboczny, który ma zostać wykonany w komponencie",
            d: "Nic, funkcja przekazywana do hooka useEffect nie zwraca wartości",
            answer: "Efekt uboczny, który ma zostać wykonany w komponencie"
        },

    ]
]