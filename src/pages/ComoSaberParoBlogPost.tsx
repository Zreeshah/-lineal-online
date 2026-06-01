
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, Phone, Calendar, FileText, DollarSign, Search, HelpCircle, User, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ComoSaberParoBlogPost: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cómo Saber Cuánto Paro Tengo: Guía Completa | Regla.onl</title>
        <meta 
          name="description" 
          content="Aprende cómo saber cuánto paro tienes acumulado. Consulta tu prestación por desempleo con nuestra guía paso a paso y la tabla de días cotizados para cobrar el paro."
        />
        <meta 
          name="keywords" 
          content="cómo saber cuánto paro tengo, prestación por desempleo, cuánto paro tengo acumulado, sede electrónica SEPE, tabla días cotizados para cobrar paro"
        />
        <link rel="canonical" href="https://regla.onl/blog/como-saber-cuanto-paro" />
        <meta property="og:title" content="Cómo Saber Cuánto Paro Tengo: Guía Completa para Consultar tu Prestación" />
        <meta property="og:description" content="Aprende a consultar tu prestación por desempleo paso a paso y descubre cuánto paro tienes acumulado con esta guía completa." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://regla.onl/blog/como-saber-cuanto-paro" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container max-w-4xl py-8">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Featured Image */}
            <div className="w-full h-64 bg-gray-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Persona consultando información sobre prestación por desempleo en ordenador" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-white text-sm bg-blue-600 px-3 py-1 rounded-full">Guía Completa</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cómo Saber Cuánto Paro Tengo: Guía Completa para Consultar tu Prestación por Desempleo
              </h1>
              
              <p className="text-lg text-gray-700 mb-6">
                ¿Quieres saber <strong>cómo saber cuánto paro tengo</strong> o <strong>cuánto paro tengo acumulado</strong>? 
                Calcular la <strong>prestación por desempleo</strong> puede parecer complicado, pero con esta guía detallada 
                te explicamos paso a paso cómo hacerlo. Desde consultar en la <strong>sede electrónica SEPE</strong> hasta 
                usar la <strong>tabla días cotizados para cobrar paro</strong>, aquí encontrarás toda la información para 
                resolver tus dudas sobre <strong>cuanto paro tengo</strong>. ¡Descubre cómo verificar tu paro y maximiza 
                tus derechos como trabajador!
              </p>
              
              {/* Tabla de Contenidos */}
              <Card className="mb-8 bg-gray-50">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-3">Tabla de Contenidos</h2>
                  <ul className="space-y-2">
                    <li><a href="#que-es-la-prestacion-por-desempleo" className="text-blue-600 hover:underline flex items-center"><FileText size={16} className="mr-2" /> ¿Qué es la Prestación por Desempleo?</a></li>
                    <li><a href="#quien-tiene-derecho-al-paro" className="text-blue-600 hover:underline flex items-center"><User size={16} className="mr-2" /> ¿Quién Tiene Derecho al Paro?</a></li>
                    <li><a href="#como-saber-cuanto-paro-tengo-acumulado" className="text-blue-600 hover:underline flex items-center"><Search size={16} className="mr-2" /> Cómo Saber Cuánto Paro Tengo Acumulado</a></li>
                    <li><a href="#tabla-de-dias-cotizados" className="text-blue-600 hover:underline flex items-center"><Calendar size={16} className="mr-2" /> Tabla de Días Cotizados para Cobrar Paro</a></li>
                    <li><a href="#cuando-y-como-solicitar" className="text-blue-600 hover:underline flex items-center"><HelpCircle size={16} className="mr-2" /> ¿Cuándo y Cómo Solicitar el Paro?</a></li>
                    <li><a href="#preguntas-frecuentes" className="text-blue-600 hover:underline flex items-center"><HelpCircle size={16} className="mr-2" /> Preguntas Frecuentes sobre el Paro</a></li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Contenido Principal */}
              <section id="que-es-la-prestacion-por-desempleo">
                <h2 className="text-2xl font-semibold mt-8 mb-4">¿Qué es la Prestación por Desempleo?</h2>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4">
                      La <strong>prestación por desempleo</strong>, comúnmente conocida como "paro", es un beneficio económico que 
                      ofrece el Servicio Público de Empleo Estatal (<strong>SEPE</strong>) a trabajadores que han perdido su empleo 
                      de forma involuntaria y cumplen ciertos requisitos. Este apoyo financiero ayuda a cubrir necesidades básicas 
                      mientras buscas una nueva oportunidad laboral. Saber <strong>cómo saber cuanto paro tengo</strong> es clave 
                      para planificar tu futuro.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <DollarSign className="text-blue-500 mb-2" size={24} />
                      <h3 className="font-medium text-blue-700 mb-2">¿Sabías que?</h3>
                      <p className="text-sm text-blue-600">
                        La prestación por desempleo no es indefinida y su duración depende directamente de tus días cotizados 
                        a la Seguridad Social.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section id="quien-tiene-derecho-al-paro">
                <h2 className="text-2xl font-semibold mt-8 mb-4">¿Quién Tiene Derecho al Paro?</h2>
                <p className="text-gray-700 mb-4">
                  Para tener derecho a la <strong>prestación por desempleo</strong>, debes cumplir las siguientes condiciones:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Haber cotizado al menos <strong>360 días</strong> (un año) en los últimos 6 años antes de quedar desempleado.</li>
                  <li>Estar en situación de desempleo por causas ajenas a tu voluntad (despido, fin de contrato, ERTE, etc.).</li>
                  <li>Estar inscrito como demandante de empleo en el SEPE.</li>
                  <li>No haber alcanzado la edad de jubilación ni estar recibiendo otras prestaciones incompatibles.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Si cumples estos requisitos, puedes empezar a <strong>consultar prestación por desempleo</strong> para conocer cuánto te corresponde.
                </p>
                
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Persona revisando documentos relacionados con el paro" 
                  className="w-full h-64 object-cover rounded-lg my-6"
                />
              </section>
              
              <section id="como-saber-cuanto-paro-tengo-acumulado">
                <h2 className="text-2xl font-semibold mt-8 mb-4">Cómo Saber Cuánto Paro Tengo Acumulado</h2>
                <p className="text-gray-700 mb-4">
                  Existen varias formas de <strong>mirar prestación por desempleo</strong> y descubrir <strong>cuanto paro tengo</strong>. 
                  A continuación, te detallamos los métodos más efectivos:
                </p>
                
                <div className="space-y-6 my-6">
                  <div className="bg-white border rounded-lg p-5 shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Search className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Consultar en la Sede Electrónica del SEPE</h3>
                        <p className="text-gray-600 mb-3">
                          La <strong>sede electrónica SEPE</strong> es la forma más rápida de verificar tu paro. Sigue estos pasos:
                        </p>
                        <ol className="list-decimal ml-5 space-y-1">
                          <li>Accede a la web oficial: <a href="https://www.sepe.es" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.sepe.es</a>.</li>
                          <li>Inicia sesión con tu <strong>certificado digital</strong>, <strong>DNI electrónico</strong>, <strong>Cl@ve</strong> o usuario y contraseña.</li>
                          <li>Dirígete a la sección <strong>"Mis trámites"</strong> o <strong>"Consultas"</strong>.</li>
                          <li>Selecciona la opción para <strong>consultar prestación por desempleo</strong>.</li>
                          <li>Revisa los detalles de tu paro acumulado, duración y cuantía.</li>
                        </ol>
                        <p className="text-sm italic mt-3">
                          <strong>Consejo</strong>: Asegúrate de tener tus credenciales digitales listas para agilizar el proceso.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-5 shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <Phone className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Llamar al SEPE por Teléfono</h3>
                        <p className="text-gray-600 mb-3">
                          Si prefieres una atención personalizada, puedes contactar al SEPE:
                        </p>
                        <ul className="space-y-1 ml-1">
                          <li><strong>Teléfono oficial</strong>: 900 81 24 00 (gratuito) o 91 273 83 84 (tarifa local).</li>
                          <li><strong>Horario</strong>: Lunes a viernes, de 9:00 a 14:00.</li>
                          <li>Proporciona tu DNI y datos personales para que te informen sobre <strong>cuanto paro tengo</strong>.</li>
                        </ul>
                        <p className="text-sm italic mt-3">
                          Este método es ideal si no tienes acceso a internet o necesitas aclarar dudas específicas.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-5 shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <User className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Visitar una Oficina del SEPE</h3>
                        <p className="text-gray-600 mb-3">
                          Otra opción es acudir a una <strong>oficina del SEPE</strong>:
                        </p>
                        <ol className="list-decimal ml-5 space-y-1">
                          <li>Pide cita previa en <a href="https://www.sepe.es" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.sepe.es</a> o llamando al 901 01 02 10.</li>
                          <li>Lleva tu DNI y cualquier documentación laboral relevante.</li>
                          <li>Un agente te informará sobre tu paro acumulado, duración y requisitos.</li>
                        </ol>
                        <p className="text-sm italic mt-3">
                          <strong>Nota</strong>: Las oficinas suelen estar concurridas, así que la cita previa es imprescindible.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-5 shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FileText className="text-amber-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Revisar tu Vida Laboral</h3>
                        <p className="text-gray-600 mb-3">
                          Tu <strong>informe de vida laboral</strong> refleja los días que has cotizado, lo que afecta directamente a <strong>cómo saber cuanto tengo de paro</strong>. Para obtenerlo:
                        </p>
                        <ol className="list-decimal ml-5 space-y-1">
                          <li>Accede a la web de la Seguridad Social: <a href="https://www.seg-social.es" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.seg-social.es</a>.</li>
                          <li>Inicia sesión con certificado digital, Cl@ve o SMS.</li>
                          <li>Descarga el informe de vida laboral.</li>
                          <li>Suma los días cotizados en los últimos 6 años para estimar tu paro.</li>
                        </ol>
                        <p className="text-sm italic mt-3">
                          Este método es útil para tener una visión general de tus cotizaciones.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-5 shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <Calculator className="text-red-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Usar el Programa de Autocálculo del SEPE</h3>
                        <p className="text-gray-600 mb-3">
                          El SEPE ofrece un <strong>programa de autocálculo</strong> en su web para <strong>consultar prestación por desempleo</strong>:
                        </p>
                        <ol className="list-decimal ml-5 space-y-1">
                          <li>Ingresa a <a href="https://www.sepe.es" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.sepe.es</a> y busca la sección de autocálculo.</li>
                          <li>Selecciona tu situación: fin de contrato, despido, ERTE, etc.</li>
                          <li>Introduce datos como días trabajados, salario y cotizaciones.</li>
                          <li>El sistema calculará <strong>cómo saber cuánto paro tengo acumulado</strong> y la duración aproximada.</li>
                        </ol>
                        <p className="text-sm italic mt-3">
                          Este programa es intuitivo y te da una estimación inmediata sin necesidad de cita.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section id="tabla-de-dias-cotizados">
                <h2 className="text-2xl font-semibold mt-8 mb-4">Tabla de Días Cotizados para Cobrar Paro</h2>
                <p className="text-gray-700 mb-4">
                  La duración de tu <strong>prestación por desempleo</strong> depende de los días que hayas cotizado en los últimos 6 años. 
                  Aquí tienes la <strong>tabla días cotizados para cobrar paro</strong> actualizada:
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border border-gray-300 rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 text-left border-b">Periodo de Cotización (días)</th>
                        <th className="py-3 px-4 text-left border-b">Periodo de Prestación (días)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="py-2 px-4">360 - 539</td>
                        <td className="py-2 px-4">120</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="py-2 px-4">540 - 719</td>
                        <td className="py-2 px-4">180</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="py-2 px-4">720 - 899</td>
                        <td className="py-2 px-4">240</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="py-2 px-4">900 - 1,079</td>
                        <td className="py-2 px-4">300</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="py-2 px-4">1,080 - 1,259</td>
                        <td className="py-2 px-4">360</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="py-2 px-4">1,260 - 1,439</td>
                        <td className="py-2 px-4">420</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="py-2 px-4">1,440 - 1,619</td>
                        <td className="py-2 px-4">480</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="py-2 px-4">1,620 - 1,799</td>
                        <td className="py-2 px-4">540</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="py-2 px-4">1,800 - 1,979</td>
                        <td className="py-2 px-4">600</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="py-2 px-4">1,980 - 2,159</td>
                        <td className="py-2 px-4">660</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="py-2 px-4">2,160 o más</td>
                        <td className="py-2 px-4">720</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-700 mb-4">
                  <strong>Ejemplo</strong>: Si has cotizado 1,500 días, tendrás derecho a 480 días (16 meses) de paro.
                </p>
                
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-lg mb-2">Gráfico de relación días cotizados vs. prestación</h3>
                  <div className="h-64 bg-white p-3 rounded border">
                    <div className="w-full h-full flex items-end">
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '17%'}}></div>
                        <p className="text-xs mt-1">120</p>
                        <p className="text-xs">360</p>
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '25%'}}></div>
                        <p className="text-xs mt-1">180</p>
                        <p className="text-xs">540</p>
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '33%'}}></div>
                        <p className="text-xs mt-1">240</p>
                        <p className="text-xs">720</p>
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '42%'}}></div>
                        <p className="text-xs mt-1">300</p>
                        <p className="text-xs">900</p>
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '50%'}}></div>
                        <p className="text-xs mt-1">360</p>
                        <p className="text-xs">1080</p>
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '58%'}}></div>
                        <p className="text-xs mt-1">420</p>
                        <p className="text-xs">1260</p>
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '67%'}}></div>
                        <p className="text-xs mt-1">480</p>
                        <p className="text-xs">1440</p>
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '75%'}}></div>
                        <p className="text-xs mt-1">540</p>
                        <p className="text-xs">1620</p>
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '83%'}}></div>
                        <p className="text-xs mt-1">600</p>
                        <p className="text-xs">1800</p>
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '92%'}}></div>
                        <p className="text-xs mt-1">660</p>
                        <p className="text-xs">1980</p>
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-end items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{height: '100%'}}></div>
                        <p className="text-xs mt-1">720</p>
                        <p className="text-xs">2160</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Este gráfico visualiza cómo aumenta la duración del paro según los días cotizados.
                  </p>
                </div>
              </section>
              
              <section id="cuando-y-como-solicitar">
                <h2 className="text-2xl font-semibold mt-8 mb-4">¿Cuándo y Cómo Solicitar el Paro?</h2>
                <p className="text-gray-700 mb-4">
                  Para <strong>consultar prestación por desempleo</strong> y solicitarla, tienes un plazo de <strong>15 días hábiles</strong> 
                  desde la fecha en que finaliza tu contrato o se produce la situación de desempleo (despido, ERTE, etc.). Pasos para solicitarla:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="bg-indigo-100 p-2 rounded-full mr-3">
                        <span className="text-indigo-600 font-bold">1</span>
                      </div>
                      <h3 className="font-medium">Inscríbete como demandante de empleo</h3>
                    </div>
                    <p className="text-sm text-gray-600 pl-10">
                      Regístrate en tu servicio autonómico de empleo antes de solicitar el paro.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="bg-indigo-100 p-2 rounded-full mr-3">
                        <span className="text-indigo-600 font-bold">2</span>
                      </div>
                      <h3 className="font-medium">Pide cita previa</h3>
                    </div>
                    <p className="text-sm text-gray-600 pl-10">
                      Solicita cita en el SEPE (online o por teléfono) para presentar tu solicitud.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="bg-indigo-100 p-2 rounded-full mr-3">
                        <span className="text-indigo-600 font-bold">3</span>
                      </div>
                      <h3 className="font-medium">Prepara la documentación</h3>
                    </div>
                    <p className="text-sm text-gray-600 pl-10">
                      DNI, vida laboral, certificado de empresa y datos bancarios.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="bg-indigo-100 p-2 rounded-full mr-3">
                        <span className="text-indigo-600 font-bold">4</span>
                      </div>
                      <h3 className="font-medium">Acude a la cita o realiza el trámite online</h3>
                    </div>
                    <p className="text-sm text-gray-600 pl-10">
                      Presenta la solicitud en persona o a través de la sede electrónica del SEPE.
                    </p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <span className="font-medium text-yellow-800">Importante:</span> La dimisión voluntaria no da derecho al paro, 
                        pero sí lo hacen los despidos, fin de contrato o ERTEs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Personas en una oficina tramitando documentos de desempleo" 
                  className="w-full h-64 object-cover rounded-lg my-6"
                />
              </section>
              
              <section id="preguntas-frecuentes">
                <h2 className="text-2xl font-semibold mt-8 mb-4">Preguntas Frecuentes sobre el Paro</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white border rounded-lg overflow-hidden">
                    <div className="border-b px-6 py-4">
                      <h3 className="text-lg font-medium" id="se-pierde-el-paro-acumulado">¿Se Pierde el Paro Acumulado?</h3>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-gray-700">
                        No pierdes el paro acumulado reciente, pero las cotizaciones de hace más de <strong>6 años</strong> no cuentan 
                        para calcular la <strong>prestación por desempleo</strong>. Sin embargo, esas cotizaciones sí se acumulan para 
                        otros beneficios, como la jubilación.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg overflow-hidden">
                    <div className="border-b px-6 py-4">
                      <h3 className="text-lg font-medium" id="que-pasa-si-vuelvo-a-trabajar">¿Qué Pasa si Vuelvo a Trabajar?</h3>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-gray-700 mb-3">
                        Si encuentras empleo antes de agotar tu paro, <strong>no pierdes el paro restante</strong>. Puedes:
                      </p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Suspender la prestación y reanudarla si vuelves a quedarte desempleado (dentro de los 6 años).</li>
                        <li>Acumular las nuevas cotizaciones para una futura prestación.</li>
                      </ul>
                      <p className="text-gray-700 mt-3">
                        Buscar trabajo activamente es recomendable, incluso mientras cobras el paro.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg overflow-hidden">
                    <div className="border-b px-6 py-4">
                      <h3 className="text-lg font-medium" id="cuanto-dinero-recibire">¿Cuánto Dinero Recibiré por el Paro?</h3>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-gray-700 mb-3">
                        La cuantía del paro depende de tus <strong>bases de cotización</strong> (salario medio de los últimos 180 días trabajados):
                      </p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li><strong>Primeros 180 días</strong>: Cobrarás el <strong>70%</strong> de tu base reguladora.</li>
                        <li><strong>Desde el día 181</strong>: Cobrarás el <strong>50%</strong> de tu base reguladora.</li>
                        <li><strong>Límites 2025</strong>: Entre 570 € (mínimo sin hijos) y 1,575 € (máximo con dos o más hijos).</li>
                      </ul>
                      <p className="text-gray-700 mt-3">
                        Para una estimación precisa, usa el programa de autocálculo en 
                        <a href="https://www.sepe.es" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">www.sepe.es</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section id="conclusion">
                <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusión</h2>
                <p className="text-gray-700 mb-4">
                  Saber <strong>cómo saber cuánto paro tengo</strong> es más fácil con herramientas como la <strong>sede electrónica SEPE</strong>, 
                  el programa de autocálculo y la <strong>tabla días cotizados para cobrar paro</strong>. Ya sea consultando online, 
                  llamando al SEPE o revisando tu vida laboral, tienes múltiples opciones para <strong>mirar prestación por desempleo</strong> 
                  y planificar tu economía. Asegúrate de solicitar el paro dentro del plazo y mantenerte activo como demandante de empleo 
                  para maximizar tus beneficios.
                </p>
                <p className="text-gray-700 mb-4">
                  ¿Necesitas más ayuda con trámites laborales? Explora nuestro sitio para encontrar guías sobre subsidios, ERTEs y 
                  otros derechos de los trabajadores. ¡Toma el control de tu <strong>prestación por desempleo</strong> hoy mismo!
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center mt-6">
                  <div className="mr-4">
                    <Mail className="h-10 w-10 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">¿Alguna duda con el paro?</h3>
                    <p className="text-blue-600 text-sm">
                      Si necesitas más información o tienes dudas específicas sobre tu caso, contacta directamente con el SEPE 
                      o consulta con un asesor laboral para recibir orientación personalizada.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ComoSaberParoBlogPost;
