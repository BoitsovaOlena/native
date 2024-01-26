import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProductScreen } from '@/screens/products/ProductScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ProductScreen/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create();
