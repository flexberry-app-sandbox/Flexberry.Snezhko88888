﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Snezhko_88888
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клиент.
    /// </summary>
    // *** Start programmer edit section *** (Клиент CustomAttributes)

    // *** End programmer edit section *** (Клиент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентE", new string[] {
            "КодКлиента as \'Код клиента\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "ДатаРождения as \'Дата рождения\'",
            "НомерТелефона as \'Номер телефона\'"})]
    [AssociatedDetailViewAttribute("КлиентE", "Автомобиль", "АвтомобильE", true, "", "Автомобиль", true, new string[] {
            ""})]
    [View("КлиентL", new string[] {
            "КодКлиента as \'Код клиента\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "ДатаРождения as \'Дата рождения\'",
            "НомерТелефона as \'Номер телефона\'"})]
    public class Клиент : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодКлиента;
        
        private string fФамилия;
        
        private string fИмя;
        
        private string fОтчество;
        
        private System.DateTime fДатаРождения;
        
        private int fНомерТелефона;
        
        private IIS.Snezhko_88888.DetailArrayOfАвтомобиль fАвтомобиль;
        
        // *** Start programmer edit section *** (Клиент CustomMembers)

        // *** End programmer edit section *** (Клиент CustomMembers)

        
        /// <summary>
        /// ДатаРождения.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.ДатаРождения CustomAttributes)

        // *** End programmer edit section *** (Клиент.ДатаРождения CustomAttributes)
        public virtual System.DateTime ДатаРождения
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.ДатаРождения Get start)

                // *** End programmer edit section *** (Клиент.ДатаРождения Get start)
                System.DateTime result = this.fДатаРождения;
                // *** Start programmer edit section *** (Клиент.ДатаРождения Get end)

                // *** End programmer edit section *** (Клиент.ДатаРождения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.ДатаРождения Set start)

                // *** End programmer edit section *** (Клиент.ДатаРождения Set start)
                this.fДатаРождения = value;
                // *** Start programmer edit section *** (Клиент.ДатаРождения Set end)

                // *** End programmer edit section *** (Клиент.ДатаРождения Set end)
            }
        }
        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Имя CustomAttributes)

        // *** End programmer edit section *** (Клиент.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Имя Get start)

                // *** End programmer edit section *** (Клиент.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Клиент.Имя Get end)

                // *** End programmer edit section *** (Клиент.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Имя Set start)

                // *** End programmer edit section *** (Клиент.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Клиент.Имя Set end)

                // *** End programmer edit section *** (Клиент.Имя Set end)
            }
        }
        
        /// <summary>
        /// КодКлиента.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.КодКлиента CustomAttributes)

        // *** End programmer edit section *** (Клиент.КодКлиента CustomAttributes)
        public virtual int КодКлиента
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.КодКлиента Get start)

                // *** End programmer edit section *** (Клиент.КодКлиента Get start)
                int result = this.fКодКлиента;
                // *** Start programmer edit section *** (Клиент.КодКлиента Get end)

                // *** End programmer edit section *** (Клиент.КодКлиента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.КодКлиента Set start)

                // *** End programmer edit section *** (Клиент.КодКлиента Set start)
                this.fКодКлиента = value;
                // *** Start programmer edit section *** (Клиент.КодКлиента Set end)

                // *** End programmer edit section *** (Клиент.КодКлиента Set end)
            }
        }
        
        /// <summary>
        /// НомерТелефона.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.НомерТелефона CustomAttributes)

        // *** End programmer edit section *** (Клиент.НомерТелефона CustomAttributes)
        public virtual int НомерТелефона
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.НомерТелефона Get start)

                // *** End programmer edit section *** (Клиент.НомерТелефона Get start)
                int result = this.fНомерТелефона;
                // *** Start programmer edit section *** (Клиент.НомерТелефона Get end)

                // *** End programmer edit section *** (Клиент.НомерТелефона Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.НомерТелефона Set start)

                // *** End programmer edit section *** (Клиент.НомерТелефона Set start)
                this.fНомерТелефона = value;
                // *** Start programmer edit section *** (Клиент.НомерТелефона Set end)

                // *** End programmer edit section *** (Клиент.НомерТелефона Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Отчество CustomAttributes)

        // *** End programmer edit section *** (Клиент.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Отчество Get start)

                // *** End programmer edit section *** (Клиент.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Клиент.Отчество Get end)

                // *** End programmer edit section *** (Клиент.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Отчество Set start)

                // *** End programmer edit section *** (Клиент.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Клиент.Отчество Set end)

                // *** End programmer edit section *** (Клиент.Отчество Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Клиент.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Фамилия Get start)

                // *** End programmer edit section *** (Клиент.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Клиент.Фамилия Get end)

                // *** End programmer edit section *** (Клиент.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Фамилия Set start)

                // *** End programmer edit section *** (Клиент.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Клиент.Фамилия Set end)

                // *** End programmer edit section *** (Клиент.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Автомобиль CustomAttributes)

        // *** End programmer edit section *** (Клиент.Автомобиль CustomAttributes)
        public virtual IIS.Snezhko_88888.DetailArrayOfАвтомобиль Автомобиль
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Автомобиль Get start)

                // *** End programmer edit section *** (Клиент.Автомобиль Get start)
                if ((this.fАвтомобиль == null))
                {
                    this.fАвтомобиль = new IIS.Snezhko_88888.DetailArrayOfАвтомобиль(this);
                }
                IIS.Snezhko_88888.DetailArrayOfАвтомобиль result = this.fАвтомобиль;
                // *** Start programmer edit section *** (Клиент.Автомобиль Get end)

                // *** End programmer edit section *** (Клиент.Автомобиль Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Автомобиль Set start)

                // *** End programmer edit section *** (Клиент.Автомобиль Set start)
                this.fАвтомобиль = value;
                // *** Start programmer edit section *** (Клиент.Автомобиль Set end)

                // *** End programmer edit section *** (Клиент.Автомобиль Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентE", typeof(IIS.Snezhko_88888.Клиент));
                }
            }
            
            /// <summary>
            /// "КлиентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентL", typeof(IIS.Snezhko_88888.Клиент));
                }
            }
        }
    }
}
