package Snezhko_88888.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Snezhko_88888.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Автомобиль
 */
@Entity(name = "IISSnezhko_88888Автомобиль")
@Table(schema = "public", name = "Автомобиль")
public class Avtomobil {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ГосНомер")
    private String госномер;

    @Column(name = "Цвет")
    private String цвет;

    @Column(name = "Марка")
    private String марка;

    @Column(name = "ТипАвтомобиля")
    private String типавтомобиля;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;


    public Avtomobil() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getГосНомер() {
      return госномер;
    }

    public void setГосНомер(String госномер) {
      this.госномер = госномер;
    }

    public String getЦвет() {
      return цвет;
    }

    public void setЦвет(String цвет) {
      this.цвет = цвет;
    }

    public String getМарка() {
      return марка;
    }

    public void setМарка(String марка) {
      this.марка = марка;
    }

    public String getТипАвтомобиля() {
      return типавтомобиля;
    }

    public void setТипАвтомобиля(String типавтомобиля) {
      this.типавтомобиля = типавтомобиля;
    }


}