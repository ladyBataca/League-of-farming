import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-6 mt-8 border-t bg-slate-900 border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center text-sm text-gray-600 dark:text-gray-200 space-y-2">
                    <p>Proyecto Educativo creado con ❤️ por Liwaisi Tech y Rincón Verde</p>
                    <p className="text-xs font-light text-white">Liga de huerteros es un proyecto de Código Abierto</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
