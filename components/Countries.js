import React, {useState, useEffect} from 'react';
import { StyleSheet, Dimensions, VirtualizedList, FlatList, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Countries = () => {

    const [countries, setCountries] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCountries() {
            setIsLoading(true);
            const url = 'http://restcountries.eu/rest/v2/all';
            const res = await fetch(url);
            res.json()
               .then(res => setCountries(res))
            setIsLoading(false);
        }
        fetchCountries();
    }, []);

    return (
        <View>
            {isLoading ? (
                <Text>Loading ...</Text>
            ) : (
                <FlatList
                    data={countries}
                    renderItem={({item}) => (
                        <View style={styles.countries}>
                            <Text>{item.name}</Text>
                            <Text>{item.capital}</Text>
                            <SvgUri
                                style={{width: 100, height: 100, top: 20}}
                                uri={item.flag}
                            />
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    countries: {
      flex: 1,
    //   top: 20,
      width: Dimensions.get('window').width,
	  height: Dimensions.get('window').height,
      alignItems: 'center',
    //   justifyContent: 'center'
    }
  });

export default Countries;